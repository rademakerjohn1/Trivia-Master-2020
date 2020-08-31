import React from 'react';

function StatsTable({ stats, onClick }) {

    return (
      <div>
        <table>
        <thead>
          <tr>
            <th>Initials</th>
            <th>Difficulty</th>
            <th>Score</th>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
            {stats.map(stat => (
                <tr>
                    <td>{stat.initials}</td>
                    <td>{stat.difficulty}</td>
                    <td>{(stat.correct / (stat.correct + stat.incorrect)) * 100}%</td>
                    <td>{stat.date}</td>
                    <td>{stat.time}</td>
                </tr>
            ))}
        </tbody>
      </table>
      <a href="/">Back</a>
      <button onClick={onClick}>Clear</button>
      </div>
    )
}

export default StatsTable;