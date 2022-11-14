import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "../styles/projects.css";

const Projects = () => {
  return (
    <div className="projects">
      <div>
        <Table>
          <caption>On-Going Projects</caption>
          <Thead>
            <Tr>
              <Th>S/No</Th>
              <Th>Project Name</Th>
              <Th>Name Of clients</Th>
              <Th>Type of work performed and year of completion</Th>
              <Th>Value of contract awarded</Th>
              <Th>Remark</Th>
            </Tr>
          </Thead>

          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>
                Engineering,Procurement and construction works of medium voltage
                networks,installation of Distribution Transformers plus the
                associated low voltage networks
              </Td>
              <Td>
                CLIENT:<strong>Rea</strong> CONTRACTOR:
                <br />
                <strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>
                  installation of Distribution Transformers plus the associated
                  low voltage networks in various regions of the country under
                  LOT 2A-Busia,Mayuge and Jinja district(115km)
                </li>
              </Td>
              <Td>Ugx.18,063,775,935.02</Td>
              <Td>On-Going </Td>
            </Tr>
          </Tbody>
        </Table>
        <hr />
        <Table>
          <caption>PROJECTS EXECUTED IN PREVIOUS YEARS</caption>
          <Thead>
            <Tr>
              <Th>S/No</Th>
              <Th>Project Name</Th>
              <Th>Name Of clients</Th>
              <Th>Type of work performed and year of completion</Th>
              <Th>Value of contract awarded</Th>
              <Th>Status of the Project</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>
                Grid Densification Project to increase electricity Access in
                Rural and Peri– Urban Areas In Uganda (Procurement ref no:
                REA-KFW/WRKS/1718/00084)
              </Td>
              <Td>
                CLIENT:<strong>Chapa General Enterprises Ltd</strong> <br />
                CONTRACTOR: <strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>
                  Installation of standard wooden poles for LV overhead lines
                </li>
                <li>Installation of LV service Cables</li>
                <li>
                  Installation and commissioning of energy meters in
                  southwestern Service territory and Rwenzori service
                  territory(April 2019 to May 2021)
                </li>
              </Td>
              <Td>EUR 200,000</Td>
              <Td>Completed</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>
                Design, Supply and Installation of 33kV Lines and associated Low
                Voltage Networks for Grid Intensification under ERT III (52
                schemes) For Three Lots; Lot 3 Western Service Territory (10
                Schemes). (Procurement ref no: REA-ERT-III/WRKS/1718/00392(a))
              </Td>
              <Td>
                CLIENT:<strong>Chapa General Enterprises Ltd</strong>
                <br />
                CONTRACTOR:<strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>Construction and installation of Power Lines network</li>
                <li>
                  Network testing, commissioning in Western service Territory
                </li>
              </Td>
              <Td>Ugx.103,141,624.20</Td>
              <Td>Completed</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>
                Design, Supply and Installation of 33kV Lines and associated Low
                Voltage Networks for Grid Intensification under ERT III (52
                schemes) For Three Lots; Lot 3 Western Service Territory (10
                Schemes). (Procurement ref no: REA-ERT-III/WRKS/1718/00392(b))
              </Td>
              <Td>
                <br />
                CLIENT:<strong>ChapaGeneral Enterprises Ltd</strong> <br />
                CONTRACTOR: <strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>
                  Construction And Installation Of Power Lines Network Network
                  Testing, Commissioning In Rwenzori Service Territory
                </li>
              </Td>
              <Td> Ugx. 1,530,354,000</Td>
              <Td>Completed</Td>
            </Tr>
            <Tr>
              <Td>4</Td>
              <Td>
                Design, Supply and installation of 11kV/33kV Lines and
                Associated Low voltage networks for grid densification Under ERT
                III (206 SCHEMES) For 10 Service Territories (STS) Lot 2: Batch
                3, Three (3STS) (North eastern, eastern and central North)
                (Procurement ref no: REA-ERTIII/WRKS/1920/00096)
              </Td>
              <Td>
                CLIENT: <strong>Chapa General Enterprises Ltd</strong> <br />
                CONTRACTOR:
                <br /> <strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>
                  Construction and Installation of Power Lines network and
                  installation of transformers in NorthEastern and CentralNorth
                </li>
                <li>
                  Network testing, commissioning and development and submission
                  of as built drawings. LV=70km,MV=10km, 28 Distribution
                  Transformers
                </li>
              </Td>
              <Td>Ugx. 1,845,570,256</Td>
              <Td>Completed</Td>
            </Tr>
            <Tr>
              <Td>5</Td>
              <Td>
                Construction of Low Voltage OFF Grid Power Distribution Networks
                in Various Regions of Uganda Under Lots 1, 2. And 3.
                (Procurement ref no: REA/WRKS/18-19/00174)
              </Td>
              <Td>
                CLIENT: <strong>Chapa General Enterprises Ltd</strong> <br />&
                Main Contractor: <br />
                <strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>
                  Construction,Network testing, commissioning in Lamwo
                  district(June 2019 to April 2021)
                </li>
              </Td>
              <Td>Ugx.2.12 billion </Td>
              <Td>Completed</Td>
            </Tr>

            <Tr>
              <Td>6</Td>
              <Td>
                Construction of 33Kv. Powerlines to Gorilla Valley, and Enganzi
                forests in Kisoro District.
              </Td>
              <Td>
                CLIENT:<strong>UEDCL</strong> <br />
                MAIN CONTRACTOR:
                <br />
                <strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>
                  Design, procurement and construction of medium voltage line to
                  the factory with an associated LV network and Distribution
                  transformer (on a Turnkey basis)
                </li>
              </Td>
              <Td>Ugx.134,336,144</Td>
              <Td>Completed</Td>
            </Tr>
            <Tr>
              <Td>7</Td>
              <Td>
                Replacement of rotten poles along Lwala-Namasale 33Kv Feeder in
                Amolatar District (Proc. Ref: UEDCL/WRKS/2017/10152)
              </Td>
              <Td>
                CLIENT:<strong>UEDCL</strong> <br />
                MAIN CONTRACTOR: <br />
                <strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>Replacement of rotten poles.</li>
              </Td>
              <Td>Ugx.396,560,610</Td>
              <Td>Completed</Td>
            </Tr>
            <Tr>
              <Td>8</Td>
              <Td>
                Construction of a 48.2km, 33Kv power line and associated LV
                networks in Kanungu Rukungiri, and Kabale Districts
              </Td>
              <Td>
                CLIENT:<strong>REA</strong> <br /> MAIN CONTRACTOR: <br />
                <strong>China Jiangxi International Ltd </strong> <br />
                Sub-contractor <br />
                <strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>
                  Power line Surveying,Excavation of poles pits, pole erection
                  and dressing,conductor stringing,transformer
                  wiring,Installation of ABC conductors for the associated LV
                  networks, and networks, and commissioning of the line Aug 2015
                  - April 2016
                </li>
              </Td>
              <Td>Ugx.531,970,564</Td>
              <Td>Completed </Td>
            </Tr>
            <Tr>
              <Td>9</Td>
              <Td>
                Construction of a 33Kv power line and associated LV networks in
                Hoima District (Surveying Phase/Stage)
              </Td>
              <Td>
                CLIENT:<strong>REA</strong> <br />
                MAIN CONTRACTOR: <br /> <strong>LTL PROJECTS(PVC) LTD</strong>
                <br />
                Sub-contractor <br />
                <strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>
                  Route survey, line design, and profiling, pegging and
                  generation of As-pegged line drawings for both HV and LV
                  networks (Sept, 2014 to Dec, 2014)
                </li>
              </Td>
              <Td>Ugx.123,056,000</Td>
              <Td>Completed</Td>
            </Tr>
            <Tr>
              <Td>10</Td>
              <Td>
                Construction of a 33Kv power line and associated LV networks in
                Hoima District (Construction Phase/Stage)
              </Td>
              <Td>
                CLIENT:<strong>REA</strong> <br />
                MAIN CONTRACTOR: <br />
                <strong>LTL PROJECTS (PVC)</strong>
                <br /> Sub-contractor <br />
                <strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>
                  Excavation of pole pits, pole erection and dressing, conductor
                  stringing,transformer wiring, Installation of ABC conductors
                  for the associated LV networks, and commissioning of the line
                  (Jan 2015 -July)
                </li>
              </Td>
              <Td>Ugx.504,336,207 </Td>
              <Td>Completed</Td>
            </Tr>
            <Tr>
              <Td>11</Td>
              <Td>
                Construction of a 26km,33Kv power line and associated LV network
                in the West Nile Region (Zombo District) (Contract Agreement
                signed between LTL and Tesla is attached herewith)
              </Td>
              <Td>
                CLIENT:<strong>UEDCL</strong> <br />
                MAIN CONTRACTOR: <br />
                <strong>
                  LTL PROJECTS (PVC) LTD <br />
                </strong>
                SUB-CONTRACTOR: <br />
                <strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>
                  Excavation of poles pits, pole erection and dressing,conductor
                  stringing,transformer wiring,Installation of ABC conductors
                  for the associated LV networks, and commissioning of the line
                  (Aug 2014–Feb 2015)
                </li>
              </Td>
              <Td>Ugx.396,432,672 </Td>
              <Td>Completed</Td>
            </Tr>
            <Tr>
              <Td>12</Td>
              <Td>
                Re-conductoring of a 33Kv Line in Kapchorwa.(Works completion
                certificate issued by Tesla Technical Services Ltd is attached
                herewith)
              </Td>
              <Td>
                CLIENT:<strong>UMEME </strong> <br />
                MAIN CONTRACTOR:
                <br />
                <strong>TETRA TECHNICAL SERVICES LTD</strong>
                <br />
                SUB-CONTRACTOR: <br />
                <strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>
                  Re-conductoring,pole replacement and injection of New
                  Transformers (March-August 2014)
                </li>
              </Td>
              <Td>Ugx.389,704,000</Td>
              <Td>Completed </Td>
            </Tr>
            <Tr>
              <Td>13</Td>
              <Td>
                Power line surveying and Construction of 40km, 33Kv power line
                and associated LV network in the Sub lot of Masindi-Waki-Buliisa
                Rural Electrification project.(Works completion certificate
                issued by KEC International Ltd is attached herewith)
              </Td>
              <Td>
                CLIENT:<strong>REA</strong> <br />
                MAIN CONTRACTOR: <br />
                <strong>KEC INTERNATIONAL LIMITED</strong>. <br />
                SUB-CONTRACTOR:
                <strong>TESLA TECHNICAL SERVICES LTD</strong>
              </Td>
              <Td>
                <li>
                  Power line surveying, Line profiling,Excavation of poles pits,
                  pole erection and dressing,conductor stringing,transformer
                  wiring and commissioning of the line (Sept 2013-feb 2014)
                </li>
              </Td>
              <Td>Ugx.716,105,000</Td>
              <Td>Completed </Td>
            </Tr>
            <Tr>
              <Td>14</Td>
              <Td>
                Civil works for renovation of Tororo station building and of
                access roads URC/Wrks/2018/00110
              </Td>
              <Td>
                CLIENT:<strong>URC</strong> <br />
                MAIN CONTRACTOR: <br />
                <strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>
                  Civil works for renovation of access roads, construction of
                  drainage channels, building renovation works. June 2018
                </li>
              </Td>
              <Td>Ugx.396,560,610</Td>
              <Td>Completed</Td>
            </Tr>
            <Tr>
              <Td>15</Td>
              <Td>
                Design and building of Kayunga-Nabuganyi and Nasana-Kireka-Bira
                roads upgrading project MOWT/WRKS/PROBASE/01/18-19
              </Td>
              <Td>
                CLIENT:<strong>MoW&T</strong>
                <br />
                MAIN CONTRACTOR:
                <strong>
                  <br />
                  Abubaker Technical Services and General supplies
                </strong>
                <br /> SUB-CONTRACTOR:
                <br /> <strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>
                  Design and building of Kayunga-Nabuganyi and
                  Nasana-Kireka-Bira roads July 2021
                </li>
              </Td>
              <Td>Ugx.1,897,923,210 </Td>
              <Td>Completed</Td>
            </Tr>
            <Tr>
              <Td>16</Td>
              <Td>
                Renovation of toilet facilities for train passenger services at
                station building URC/WRKS/2019-20/00475
              </Td>
              <Td>
                CLIENT:<strong>URC</strong> <br />
                MAIN CONTRACTOR: <br />
                <strong>Tesla Technical Services Ltd</strong>
              </Td>
              <Td>
                <li>
                  Renovation of toilet facilities for train passenger services
                  at station building Feb 2021
                </li>
              </Td>
              <Td>Ugx.22,381,650</Td>
              <Td>Completed</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    </div>
  );
};

export default Projects;
