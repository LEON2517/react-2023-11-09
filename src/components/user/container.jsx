import { User } from "./component";
import { useDispatch, useSelector } from "react-redux";
import {selectUserById} from "../../redux/features/entities/user/selectors";
import {useEffect} from "react";
import { getUsers } from "../../redux/features/entities/user/thunks/get-users";

export const UserContainer = ({ review, ...rest}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  const user = useSelector(state => selectUserById(state, review.userId))

  if (!user) return null;

  return <User
    {...rest}
    user={user}
  />
}