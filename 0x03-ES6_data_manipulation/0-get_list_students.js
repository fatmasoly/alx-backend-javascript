const studdentObject = (id, firstName, location) => ({ id, firstName, location });

const getListStudents = () => [
  studdentObject(1, 'Guillaume', 'San Francisco'),
  studdentObject(2, 'James', 'Columbia'),
  studdentObject(5, 'Serena', 'San Francisco'),
];

export default getListStudents;
