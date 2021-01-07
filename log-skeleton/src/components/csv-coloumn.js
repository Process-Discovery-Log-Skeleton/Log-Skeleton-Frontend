import { useState } from "react"
import { useLogSkeleton } from "../lib/api/log-skeleton"
import styles from '../styles/CSVPicker.module.css'

export const CSVColumnPicker = ({columns}) => {
    const { config, registerEventLog } = useLogSkeleton()

    const [idSelection, setIDSelection] = useState(columns[0])
    const [caseSelection, setCaseSelection] = useState(columns[0])

    if (columns.length === 0) {
        return <></>
    }

    const onChangeID = (event) => {
        setIDSelection(event.target.value)
    }

    const onChangeCase = (event) => {
        setCaseSelection(event.target.value)
    }

    const onSubmit = () => {
        registerEventLog(config.fileContent, idSelection, caseSelection)
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>Pick the event identifier</div>
                <select 
                    className={styles.selection}
                    onChange={onChangeID}
                    >
                    {
                        columns.map(item => {
                            return (
                                <option
                                    value={item}>
                                        {item}
                                </option>
                            )
                        })
                    }
                </select>

                <div className={styles.title}>Pick the trace identifier</div>
                <select 
                    className={styles.selection}
                    onChange={onChangeCase}
                    >
                    {
                        columns.map(item => {
                            return (
                                <option
                                    value={item}>
                                        {item}
                                </option>
                            )
                        })
                    }
                </select>

                <button
                    className={styles.submit}
                    onClick={onSubmit}>
                    Submit
                </button>
            </div>
        </div>
    )
}

