exports.adminOnly = (req, res, next) => {
    if (req.user.role !== 'Admin') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};

exports.teacherOnly = (req, res, next) => {
    if (req.user.role !== 'Teacher') {
        return res.status(403).json({ message: 'Access denied' });
    }
    next();
};
