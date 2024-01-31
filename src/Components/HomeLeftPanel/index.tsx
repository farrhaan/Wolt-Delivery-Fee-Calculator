import React from 'react'
import styles from "./index.module.scss";
export default function HomeLeftPanel() {
    return (
        <div className={styles.wrap}>
            <img src={require("../../Assets/wolt-logo.png")} />
            <h1>How much will I pay for delivery?</h1>
            <p>
                Use the given calculator to know how much delivery you’d need to pay based on your order’s data.
            </p>
        </div>
    )
}
