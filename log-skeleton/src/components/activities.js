import React from 'react';
import { useLogSkeleton } from '../lib/api/log-skeleton';
import { trimString } from '../lib/common/trim-strings';
import styles from '../styles/SidePanel.module.css'

const Activities = () => {
    const model = useLogSkeleton()

    const activities = model.logSkeleton.activities

    const handleActivityToggle = (item, include) => {
        if (include && !model.activeActivities.includes(item)) {
        // If include is toggled and the item is not included
            // Add the item to the list
            model.setActiveActivities(model.activeActivities.concat([item]))
        }else if (!include && model.activeActivities.includes(item)) {
        // If not include is toggled and the item is included
            model.setActiveActivities(model.activeActivities.filter(val => val !== item))
        }
    }

    return (     
        <div className={styles.container}>
            <div className={styles.title}>Activities</div>
            <div className={styles.contentContainer}>
                {
                    activities.map( activity => {
                        return (
                            <ActivityBox
                                key={activity}
                                title={activity}
                                callback={handleActivityToggle}
                                toggle={model.activeActivities.includes(activity)}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

const ActivityBox = ({title, callback, toggle}) => {
    const { activityDisplayName } = useLogSkeleton()

    const handleToggle = (event) => {
        callback(title, !toggle)
        console.log('toggle');
    }

    return (
        <button 
        className={[styles.buttonStyle, toggle ? styles.activityButton : styles.disabledButton].join(' ')}
        onClick={handleToggle}>
            {trimString(activityDisplayName(title))}
        </button>
    )
}

export default Activities;