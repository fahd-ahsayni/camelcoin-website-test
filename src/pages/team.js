const teamMembers = [
  {
    name: "Jenny Wilson",
    role: "Founder",
    image:
      "https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-1.jpg",
  },
  {
    name: "Darrell Steward",
    role: "CTO",
    image:
      "https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-2.jpg",
  },
  {
    name: "Bessie Cooper",
    role: "CMO",
    image:
      "https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-3.jpg",
  },
  {
    name: "Arlene McCoy",
    role: "Senior Developer",
    image:
      "https://cdn.rareblocks.xyz/collection/celebration/images/team/3/team-avatar-4.jpg",
  },
];

function TeamMembers() {
  return (
    <main className="bg-blue-gray-50 dark:bg-[#0d1117] overflow-x-hidden h-screen w-screen flex items-center justify-center" >
      <section className="py-10 mt-8 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold leading-tight text-black">
              Meet the brains
            </h2>
            <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis.
            </p>
          </div>

          <div className="grid grid-cols-2 mt-8 text-center sm:mt-16 lg:mt-20 sm:grid-cols-4 lg:grid-cols-4 gap-x-0">
            {teamMembers.map((member) => (
              <div key={member.name}>
                <img
                  className="object-cover mx-auto rounded-lg w-28 h-28"
                  src={member.image}
                  alt={member.name}
                />
                <p className="mt-8 text-lg font-semibold leading-tight text-black">
                  {member.name}
                </p>
                <p className="mt-1 text-base leading-tight text-gray-600">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default TeamMembers;
