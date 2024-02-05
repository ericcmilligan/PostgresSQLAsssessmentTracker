import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    const date = new Date(2024, 1, 26);


    // Create roles first
    await prisma.roles.createMany({
       data: [
          { roleName: 'MODULE_LEADER' },
          { roleName: 'INTERNAL_MODERATOR' },
      ],
    });

    // Create modules
    await prisma.modules.createMany({
        data: [
          { moduleName: 'Module 1' },
          { moduleName: 'Module 2' },
        ],
    });

    // Create users, assigning roles and modules
    await prisma.users.createMany({
        data: [
          {
            email: 'admin1@example.com',
            name: 'Admin User 1',
            rolesId: 1, 
            modulesId: 1, // Assign to Module 1
          },
          {
            email: 'admin2@example.com',
            name: 'Admin User 2',
            rolesId: 1, 
            modulesId: 2, // Assign to Module 2
          },
        ],
     });
    
    // Seeding assessments
   await prisma.assessments.create({
      data: {
        moduleId: 1,
        assessmentName: "Programming Fundamentals",
        handOutWeek: date.toISOString(),
        handInWeek: date.toISOString(),
        setterId: 2,
        version: 1
      },
    });
    
    // Seeding Part 1 Assessment Availability
    await prisma.part_1_Assessment_Availability.create({
      data: {
        assessmentsId: 1,
        draftAssessmentDate: date.toISOString(),
        lastYearAssessmentAvailable: true,
        lastYearAssessmentDate: date.toISOString(),
        markingPlanSummary: "Summary of marking plan goes here",
        changesSummary: "Summary of changes from last year goes here",
        version: 1
      },
    });

}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })