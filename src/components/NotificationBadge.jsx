import React from 'react';

const NotificationBadge = React.memo(({
    notificationCount,
}) => {
    if (!notificationCount) return null;

    return (
        <span className={`notification-badge ${notificationCount > 9 ? 'x2' : ''}`}>
            {notificationCount}
        </span>
    );
});

export default NotificationBadge;
