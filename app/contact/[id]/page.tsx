import React from "react";

const ContactDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return <div>ContactDetails {id}</div>;
};

export default ContactDetails;
