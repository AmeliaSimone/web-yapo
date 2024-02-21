import React from 'react'

import styles from "./ContentCell.module.scss"

const ContentCell = ({ children, width, align, gap, className}: any) => {
    return (
        <div className={`${styles.content_cell} ${className}`} style={{width: width, justifyContent:align, gap: gap}}>{children}</div>
    );
};

export default ContentCell;