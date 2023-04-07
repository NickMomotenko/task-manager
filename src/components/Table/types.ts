export type TableProps = {
  head: string[];
  body: {
    id: number;
    user: {
      fullname: string;
      avatar: string;
    };
    data: {
      created_at: string;
      status_type: {
        title: string;
        textColor: string;
      };
      title: string;
      status_percent: number;
    };
  }[];
  layoutRules: number[];
};
