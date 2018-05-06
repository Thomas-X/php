<?php

namespace App\Console\Commands;

use App\GitRepoData;
use Illuminate\Console\Command;

class getGithubRepositoryData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'crawl:gitRepoData';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Gets git repository data of Thomas-X and stores it in DB. Dont forget to add the OAuth GITHUB_TOKEN in .env file!';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    private function doRequest ($url) {
	    $context = stream_context_create(
		    array(
			    "http" => array(
				    "header" => "User-Agent: Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36"
			    )
		    )
	    );
	    return (array)json_decode(file_get_contents($url . '?access_token=' . env('GITHUB_TOKEN'), false, $context));
    }

    private function parseRequestAndSum ($repos) {
		// Parse request and sum up totals
	    $arr = [];
	    foreach ($repos as $repo) {
		    $res = $this->doRequest($repo->languages_url);
		    $keys = array_keys($res);
		    if(count($arr) > 0) {
			    foreach($keys as $key) {
				    // Don't include CSS since its not a programming language. Yes.
				    if($key !== 'CSS') {
					    if(isset($arr[$key])) {
						    $arr[$key] += $res[$key];
					    } else {
						    $arr[$key] = $res[$key];
					    }
				    }
			    }
		    } else {
			    foreach($keys as $key) {
				    $arr[$key] = $res[$key];
			    }
		    }
	    }
	    return $arr;
    }

    private function calcAvgPercentages($arr) {
	    // Sum up and avg a set of numbers
	    $sum = 0;
	    $arrKeyed = array_keys($arr);
	    foreach($arr as $languageTotal => $val) {
		    $sum += $val;
	    }
	    $onePercent = $sum / 100;
	    $avgArr = [];
	    foreach($arrKeyed as $key) {
		    $avgArr[$key] = $arr[$key] / $onePercent;
	    }
	    return $avgArr;
    }

    //Execute the console command.
    public function handle()
    {
    	// Remove all existing data first.
	    GitRepoData::truncate();

	    $repos = $this->doRequest('https://api.github.com/users/Thomas-X/repos');
	    $arr = $this->parseRequestAndSum($repos);
	    $percentages = $this->calcAvgPercentages($arr);
	    $this->info((string) json_encode($percentages));

	    foreach($percentages as $percentageLanguage => $value) {
	    	$gitrepodata = new GitRepoData;
	    	$gitrepodata->language = $percentageLanguage;
	    	$gitrepodata->percentage = $value;
	    	$gitrepodata->save();
	    }

	    return $percentages;
    }
}
