type Person = {
  name: string,
};

type Email = {
  email: string,
};

type Phone = {
  phone: string,
};

type ContactDetails =
  & Person
  & Email
  & Phone;

function contact(details: ContactDetails) {
  console.log(`Dear ${details.name}. 
  I hope you received our email at ${details.email}.
  We will call you at ${details.phone} shortly.
  `);
}
