import React, { useRef, useEffect } from "react";
import { Buttons } from "./Buttons";

const tableHeadings = [
    {
        id: 1,
        type: "Company",
    },
    {
        id: 2,
        type: "Location",
    },
    {
        id: 3,
        type: "Status",
    },
];

const tableData = [
    {
        id: 1,
        name: "QuantumScape Innovations",
        location: "123 Main Street, Suite 456, Cityville, State 12345",
        status: "Ok",
    },
    {
        id: 2,
        name: "StellarTech",
        location: "789 Elm Avenue, Apt 101, Townsville, State 67890",
        status: "Critical",
    },
    {
        id: 3,
        name: "NebulaCraft Dynamics",
        location: "456 Oak Lane, Unit 303, Villagetown, State 13579",
        status: "Ok",
    },
    {
        id: 4,
        name: "Pinnacle Innovators Group",
        location: "987 Pine Street, Building B, Hamletsville, State 24680",
        status: "Critical",
    },
    {
        id: 5,
        name: "Zenith Enterprises",
        location: "321 Maple Drive, Floor 2, Boroughburg, State 97531",
        status: "Ok",
    },
    {
        id: 6,
        name: "VelocityVista",
        location: "654 Cedar Road, Room 205, Metropolis, State 86420",
        status: "Ok",
    },
    {
        id: 7,
        name: "SynergyBurst Solutions",
        location: "789 Birch Court, Office 303, Summit City, State 75309",
        status: "Ok",
    },
    {
        id: 8,
        name: "QuantumQuest",
        location: "210 Walnut Plaza, Suite 107, Groveton, State 46812",
        status: "Critical",
    },
    {
        id: 9,
        name: "NovaStride A/S",
        location: "543 Redwood Lane, Apartment 404, Harborside, State 15963",
        status: "Ok",
    },
    {
        id: 10,
        name: "ApexFusion Technologies",
        location: "876 Spruce Circle, Unit 202, Lakeside, State 35791",
        status: "Ok",
    },
];

export const Table = () => {
    const tableContainerRef = useRef(null);

    const test = () => {
        const optionHeading = tableContainerRef.current.querySelector("thead th:last-of-type");
        const optionButtons = tableContainerRef.current.querySelectorAll("tbody td:last-of-type");
    
        if (tableContainerRef.current.clientWidth < 500) {
          optionHeading.classList.add("test");
          optionButtons.forEach(button => {
            button.classList.add("test");
          });
          console.log(tableContainerRef.current.clientWidth);
        } else {
          optionHeading.classList.remove("test");
          optionButtons.forEach(button => {
            button.classList.remove("test");
          });
        }
      };
    
      useEffect(() => {
        // Add resize event listener
        const handleResize = () => {
          test();
        };
    
        window.addEventListener('resize', handleResize);
    
        // Cleanup the event listener on component unmount
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [tableContainerRef]);

    return (
        <div ref={tableContainerRef} className="table-container">
            <table>
                <thead>
                    <tr>
                        {tableHeadings.map((item) => (
                            <th key={item.id}>{item.type}</th>
                        ))}
                        <th>Options</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.location}</td>
                            <td>{item.status}</td>
                            <td>
                                <Buttons />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
