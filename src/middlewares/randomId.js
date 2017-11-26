export default store => next => action => {
    if (!action.generateCommentId) return next(action);

    next({
        ...action,
        randomId: Date.now().toString(),
    });
};