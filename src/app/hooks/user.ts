import { useQuery } from "@tanstack/react-query";
import { graphqlClient } from "../api/api";
import { getCurrentUserQuery } from "../graphql/query/user";
import { RequestDocument } from "graphql-request";

interface User {
  // Define the properties of the user object here
  id: string;
  name: string;
  // Add other properties as needed
}

export const useCurrentUser = () => {
  const query = useQuery<{ getCurrentUser: User }, Error>({
    queryKey: ["current-user"],
    queryFn: () =>
      graphqlClient.request(getCurrentUserQuery as RequestDocument),
  });

  return { ...query, user: query.data?.getCurrentUser };
};
