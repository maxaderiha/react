export default store => next => action => {
    if (!action.generateCommentId) {
        next(action);
        return;
    }

    next({
        ...action,
        randomId: Date.now().toString(),
    });
};