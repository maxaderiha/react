export default store => next => action => {
    if (!action.generateCommentId) next(action);
    next({
        ...action,
        randomId: Date.now().toString(),
    });
};