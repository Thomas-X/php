const initialState = {
    aboutUnlocked: false,
    portfolioUnlocked: false,
};

const UNLOCK_ABOUT = 'UNLOCK_ABOUT';
const UNLOCK_PORTFOLIO = 'UNLOCK_PORTFOLIO';

export default (state = initialState, action) => {
    switch (action.type) {
        case UNLOCK_ABOUT:
            return Object.assign(state, {
                aboutUnlocked: true,
            });
        case UNLOCK_PORTFOLIO:
            return Object.assign(state, {
                portfolioUnlocked: true,
            });
        default:
            return state;
    }
}

export const unlockAbout = () => {
    return {
        type: UNLOCK_ABOUT
    }
};

export const unlockPortfolio = () => {
    return {
        type: UNLOCK_PORTFOLIO,
    }
}