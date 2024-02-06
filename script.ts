import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    const date = new Date(2024, 1, 26);


  //   // Create roles first
  //   await prisma.roles.createMany({
  //      data: [
  //         { roleName: 'MODULE_LEADER' },
  //         { roleName: 'INTERNAL_MODERATOR' },
  //     ],
  //   });

  //   // Create modules
  //   await prisma.modules.createMany({
  //       data: [
  //         { moduleName: 'Module 1' },
  //         { moduleName: 'Module 2' },
  //       ],
  //   });

  //   // Create users, assigning roles and modules
  //   await prisma.users.createMany({
  //       data: [
  //         {
  //           email: 'admin1@example.com',
  //           name: 'Admin User 1',
  //           rolesId: 1, 
  //           modulesId: 1, // Assign to Module 1
  //         },
  //         {
  //           email: 'admin2@example.com',
  //           name: 'Admin User 2',
  //           rolesId: 1, 
  //           modulesId: 2, // Assign to Module 2
  //         },
  //       ],
  //    });
    
    // Seeding assessments
   await prisma.assessments.create({
      data: {
        moduleId: 2,
        assessmentName: "Programming Fundamentals 2",
        handOutWeek: date.toISOString(),
        handInWeek: date.toISOString()
      },
    });
    
  //   // Seeding Part 1 Assessment Availability
  //   await prisma.part_1_Assessment_Availability.create({
  //     data: {
  //       assessmentsId: 1,
  //       draftAssessmentDate: date.toISOString(),
  //       lastYearAssessmentAvailable: true,
  //       lastYearAssessmentDate: date.toISOString(),
  //       markingPlanSummary: "Summary of marking plan goes here",
  //       changesSummary: "Summary of changes from last year goes here",
  //       version: 1
  //     },
  //   });
  
// const assessmentAvailabilityData = [
//   {
//     draftAssessmentDate: new Date('2024-02-15'), // Replace with your desired date
//     lastYearAssessmentAvailable: true,
//     lastYearAssessmentDate: new Date('2023-03-20'), // Replace with your desired date
//     lastModifiedDate: new Date('2023-03-20'),
//     markingPlanSummary: 'Marking plan summary for Assessment 1',
//     changesSummary: 'Changes made to Assessment 1 from last year',
//     assessmentsId: 1, // Replace with the ID of your existing assessment
//   },
//   // ... more availability records
// ];

// // Insert multiple assessment availabilities
// async function createAssessmentAvailabilities() {
//   try {
//     await prisma.assessment_Availability.createMany({
//       data: assessmentAvailabilityData,
//     });
//     console.log('Assessment availabilities created successfully!');
//   } catch (error) {
//     console.error('Error creating assessment availabilities:', error);
//   } finally {
//     await prisma.$disconnect(); // Close the Prisma client
//   }
// }

// createAssessmentAvailabilities();

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