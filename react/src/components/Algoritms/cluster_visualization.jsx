import React, { useEffect, useRef } from 'react';
import { Scatter } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

const ClusterVisualization = ({ properties, clusters, centroids }) => {
    const chartRef = useRef(null);

    // Predefined colors for consistency
    const colors = [
        'rgba(255, 99, 132, 0.5)',
        'rgba(54, 162, 235, 0.5)',
        'rgba(75, 192, 192, 0.5)',
        'rgba(255, 206, 86, 0.5)',
        'rgba(153, 102, 255, 0.5)',
        'rgba(255, 159, 64, 0.5)',
    ];

    const data = {
        datasets: []
    };

    const clusterCount = Math.max(...clusters) + 1; // Ensure we cover all clusters
    for (let i = 0; i < clusterCount; i++) {
        data.datasets.push({
            label: `Cluster ${i + 1}`,
            data: properties
                .filter((_, index) => clusters[index] === i)
                .map(prop => ({ x: prop.lot_area, y: prop.floor_area })),
            backgroundColor: colors[i % colors.length], // Predefined colors for consistency
        });
    }

    // Add centroids as large points
    centroids.forEach((centroid, index) => {
        data.datasets.push({
            label: `Centroid ${index + 1}`,
            data: [{ x: centroid[3], y: centroid[4] }], // lot_area and floor_area
            backgroundColor: 'black',
            pointRadius: 10,
            pointHoverRadius: 15,
        });
    });

    useEffect(() => {
        // No need to manually destroy the chart instance with react-chartjs-2
    }, [data]); // Re-run when data changes

    return (
        <div>
            <h2>Cluster Visualization</h2>
            <Scatter 
                ref={chartRef}
                data={data} 
                options={{
                    scales: {
                        x: { title: { display: true, text: 'Lot Area' } },
                        y: { title: { display: true, text: 'Floor Area' } },
                    }
                }} 
            />
        </div>
    );
};

export default ClusterVisualization;
