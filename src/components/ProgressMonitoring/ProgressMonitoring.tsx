import { FC, MouseEventHandler, useMemo } from 'react';
import "./ProgressMonitoring.css";

interface Props { }
const ProgressMonitoring: FC<Props> = ({ }) => {
    const current = useMemo(() => 6, []);

    return <div className="process-monitoring">
        <div className="process-monitoring__level-card-container">
            {new Array(10).fill(null).map((_, index) => {
                const isCurrentLevel = index === current;
                const isNextLevel = index > current;
                return <div className={`process-monitoring__level-card-container__level-card ${isCurrentLevel ? "current" : ""} ${isNextLevel ? "next" : ""}`.trim()}></div>
            })}
        </div>
    </div>
}

export default ProgressMonitoring;