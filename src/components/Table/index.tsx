import { ProgressLine } from "../../containers/ProgressLine";
import { Avatar } from "../Avatar";
import { Checkbox } from "../Checkbox";
import {
  TableWrapp,
  TableHeader,
  TableColumn,
  TableHeaderLabel,
  TableBody,
  TableItem,
  TableCheckbox,
  TableData,
  TableDataTitle,
  TableProgressLine,
  TableStatus,
  TableDate,
  TableProgressLineCounter,
  TableList,
} from "./styled";

interface TableProps {
  head: string[];
  body: {
    id: number;
    user: {
      fullname: string;
      avatar: string;
    };
    data: {
      created_at: string;
      status_name: string;
      title: string;
      status_percent: number;
    };
  }[];
  layoutRules: number[];
}

export const Table: React.FC<TableProps> = ({ head, layoutRules, body }) => {
  return (
    <TableWrapp>
      <TableHeader>
        {head?.map((header, index) => {
          return (
            <TableColumn
              key={index}
              flex={layoutRules[index]}
              center={index !== 0}
            >
              <TableHeaderLabel>{header}</TableHeaderLabel>
            </TableColumn>
          );
        })}
      </TableHeader>
      <TableBody>
        <TableList as="ul">
          {body?.map(({ data, user }) => (
            <TableItem as="li">
              <TableColumn flex={layoutRules[0]}>
                <TableCheckbox>
                  <Checkbox
                    initialState={data?.status_percent === 100 ? true : false}
                  />
                </TableCheckbox>
                <TableData>
                  <TableDataTitle>{data?.title}</TableDataTitle>
                  <TableProgressLine>
                    <ProgressLine initialValue={data?.status_percent} />
                    <TableProgressLineCounter>
                      {data?.status_percent}%
                    </TableProgressLineCounter>
                  </TableProgressLine>
                </TableData>
              </TableColumn>
              <TableColumn
                flex={layoutRules[1]}
                center
                style={{ flexDirection: "column" }}
              >
                <TableStatus>{data?.status_name}</TableStatus>
                <TableDate>{data?.created_at}</TableDate>
              </TableColumn>
              <TableColumn flex={layoutRules[2]} center>
                <Avatar url={user?.avatar} alt={user?.fullname} size={32} />
              </TableColumn>
            </TableItem>
          ))}
        </TableList>
      </TableBody>
    </TableWrapp>
  );
};
