import React from 'react'

import styles from "./ContentRow.module.scss"

const ContentRow = ({ children, width, align, gap, height, className}: any) => {
    return (
        <div className={`${styles.content_row} ${className}`} style={{width: width, justifyContent: align, gap:gap, height:height}}>{children}</div>
    );
};

export default ContentRow;