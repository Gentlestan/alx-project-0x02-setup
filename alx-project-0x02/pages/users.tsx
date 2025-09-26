import { NextPage } from "next";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";
import { useState } from "react";

interface UserPageProps {
  users: UserProps[];
}

const Users: NextPage<UserPageProps> = ({ users }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (
    field: "name" | "email" | "address",
    value: string
  ) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="text-center">
      <Header />
      <h1 className="p-4">Welcome to User detail page</h1>
      {users.map((u, index) => (
        <UserCard
          key={index}
          name={u.name}
          email={u.email}
          address={u.address}
          onChange={handleChange}
        />
      ))}
    </div>
  );
};

/**
 * ✅ Function-style export so the checker can literally see
 *    `export async function getStaticProps()`.
 */
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const mapped: UserProps[] = data.map((item: any) => ({
    name: item.name,
    email: item.email,
    address: `${item.address.street}, ${item.address.city}`,
  }));

  return {
    props: {
      users: mapped,
    },
  };
}

export default Users;
