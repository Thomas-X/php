import axios from 'axios';
export default (() => {
    const token = document.head.querySelector('meta[name="csrf-token"]');
    axios.create({
        baseURL: '/',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'X-CSRF-TOKEN': token.content
        }
    });
})()