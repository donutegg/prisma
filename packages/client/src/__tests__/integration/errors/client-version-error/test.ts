import { getTestClient } from '../../../../utils/getTestClient'

test('client-version-error', async () => {
  const PrismaClient = await getTestClient()
  const prisma = new PrismaClient()
  try {
    await prisma.user.findMany({ invalidArg: true })
  } catch (e) {
    expect(e.clientVersion).toMatchInlineSnapshot(`client-test-version`)
    expect(e).toMatchInlineSnapshot(`

            Invalid \`prisma.user.findMany()\` invocation in
            /client/src/__tests__/integration/errors/client-version-error/test.ts:0:0

              4 const PrismaClient = await getTestClient()
              5 const prisma = new PrismaClient()
              6 try {
            → 7   await prisma.user.findMany({
                    invalidArg: true,
                    ~~~~~~~~~~
                  ? where?: UserWhereInput,
                  ? orderBy?: UserOrderByWithRelationInput[] | UserOrderByWithRelationInput,
                  ? cursor?: UserWhereUniqueInput,
                  ? take?: Int,
                  ? skip?: Int,
                  ? distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
                  })

            Unknown argument \`invalidArg\`. Available options are listed in green.
        `)
    await prisma.$disconnect()
  }
})
