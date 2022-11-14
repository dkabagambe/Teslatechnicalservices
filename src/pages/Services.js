import React from "react";
import "../styles/Services.css";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";

const Services = () => {
  return (
    <div className="equip">
      <div className="services">
        <h2>Capacity to Implement Contracts</h2>

        <p>
          The company is in possession of all necessary tools and equipment for
          proper execution of any acquired contract. This was achieved through
          cash purchases, leasing and through partnerships special equipment and
          tools supply contracts with other companies.
        </p>
      </div>
      <div className="tools">
        <Table>
          <caption>TOOLS AND EQUIPMENT</caption>
          <Thead>
            <Tr>
              <Th>CATEGORY</Th>
              <Th>ITEM</Th>
              <Th>SPECIFICATIONS</Th>
              <Th>QUANTITY</Th>
              <Th>OWNERSHIP</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td rowspan="7">Inspection,Testing and Commissioning (O&M)</Td>
              <Td>Insulation Megger</Td>
              <Td>5kV, 1kV</Td>
              <Td>2</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Earth Megger</Td>
              <Td></Td>
              <Td>2</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Cable locator</Td>
              <Td>Heavy duty,portable</Td>
              <Td>1</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Cable fault locator</Td>
              <Td>Radio detective</Td>
              <Td>1</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Oil Dielectric Test Machine</Td>
              <Td></Td>
              <Td>1</Td>
              <Td>Leased</Td>
            </Tr>
            <Tr>
              <Td>Oil DGA (Dissolved Gas Analysis) Machine</Td>
              <Td></Td>
              <Td>1</Td>
              <Td>Hired</Td>
            </Tr>
            <Tr>
              <Td>Oil Regeneration Machine</Td>
              <Td></Td>
              <Td>1</Td>
              <Td>Hired</Td>
            </Tr>
            <Tr>
              <Td rowspan="4">Transportation</Td>
              <Td>Double Cabin Pick-up</Td>
              <Td></Td>
              <Td>2</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Canter Truck (Long Chassis)</Td>
              <Td></Td>
              <Td>1</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Saloon cars</Td>
              <Td></Td>
              <Td>3</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Self-Loader Truck</Td>
              <Td>7 Tone</Td>
              <Td>1</Td>
              <Td>Hired</Td>
            </Tr>
            <Tr>
              <Td rowspan="2">Power line Surveying</Td>
              <Td>Differential GPS</Td>
              <Td></Td>
              <Td>2</Td>
              <Td>Hired</Td>
            </Tr>
            <Tr>
              <Td>Tape measure</Td>
              <Td></Td>
              <Td>10</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td rowspan="14">Power line Construction</Td>
              <Td>First Aid Boxes</Td>
              <Td></Td>
              <Td>3</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Self-loader trucks</Td>
              <Td></Td>
              <Td>1</Td>
              <Td>Hired</Td>
            </Tr>
            <Tr>
              <Td>Working Earth Gear</Td>
              <Td></Td>
              <Td>3 Sets</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Climbers</Td>
              <Td></Td>
              <Td>10 Sets</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Pull Lift</Td>
              <Td>1/2Tn,2Tn,3Tn</Td>
              <Td>3 Sets</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Drum Jerks</Td>
              <Td></Td>
              <Td>4 Sets</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Poles Pikes</Td>
              <Td></Td>
              <Td>6 pcs</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Sisal Ropes</Td>
              <Td></Td>
              <Td>12 pcs</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Claw bars</Td>
              <Td></Td>
              <Td>60 pcs</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Power Saws</Td>
              <Td></Td>
              <Td>2 pcs</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Come a longs</Td>
              <Td></Td>
              <Td>6 pcs</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Rollers</Td>
              <Td></Td>
              <Td>30 pcs</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Turfoir</Td>
              <Td></Td>
              <Td>2 Units</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Bolt cutter</Td>
              <Td></Td>
              <Td>4 Units</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td rowspan="5">Building Construction</Td>
              <Td>Concrete mixer</Td>
              <Td></Td>
              <Td>2 machines</Td>
              <Td>Hired</Td>
            </Tr>
            <Tr>
              <Td>Wheel barrows</Td>
              <Td></Td>
              <Td>20 units</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Circular saws</Td>
              <Td></Td>
              <Td>4 unit</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Power Drill</Td>
              <Td></Td>
              <Td>3 machine</Td>
              <Td>Owned</Td>
            </Tr>
            <Tr>
              <Td>Backhoe</Td>
              <Td>For trenching,digging and excavation</Td>
              <Td>1 machine</Td>
              <Td>Hired</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Services;
