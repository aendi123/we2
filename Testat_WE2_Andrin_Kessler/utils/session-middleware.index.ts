export const sessionUserSettings = (req: any, res: any, next: any) => {
    const userSettings = req.session?.userSettings || {orderBy: 'title', orderDirection: -1, theme: 'dark', filterCompleted: false};
    const {orderBy, orderDirection, theme, filterCompleted} = req.query;

    if (theme) {
        userSettings.theme = theme;
    }
    if (orderBy) {
        userSettings.orderBy = orderBy;
    }
    if (orderDirection) {
        userSettings.orderDirection = orderDirection;
    }
    if (filterCompleted) {
        userSettings.filterCompleted = filterCompleted;
    }
    req.userSettings = req.session.userSettings = userSettings;
    res.locals = req.userSettings; // visible within views

    next();
};
