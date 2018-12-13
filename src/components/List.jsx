import React from 'react';
import 'simplebar';
import '../../sass/components/_ciq-list.scss';

const List = ({
    height,
    items,
    onItemClick,
    children,
}) => {
    const hasFunctionAsChildren = (typeof children === 'function');
    const renderRow = hasFunctionAsChildren ? children : (item => item.text);
    const itemClassName = it => 'ciq-list-item'
               + ` ${it.disabled ? 'disabled' : ''}`
               + ` ${it.active ? 'active' : ''}`;
    return (
        <div
            data-simplebar
            data-simplebar-auto-hide="false"
            className="ciq-list"
            style={height && { height: `${height}px` }}
        >
            {items.map((it, idx) => (
                <div
                    key={it.id}
                    className={itemClassName(it)}
                    onClick={() => onItemClick(idx, it)}
                >
                    {renderRow(it)}
                </div>
            ))}
        </div>
    );
};

export default List;
