import { User } from "./component";
import {useGetUsersQuery} from "../../redux/services/api";

export const UserContainer = ({ review, ...rest}) => {

  const { data, isFetching } = useGetUsersQuery();

  if (isFetching) return "Loading...";

  return <User
    {...rest}
    user={data.find(({ id }) => id === review.userId)}
  />
}