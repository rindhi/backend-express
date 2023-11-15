const prisma = require('../helpers/database')

class _user {
    listUser = async () => {
        try {
            const list = await prisma.user.findMany()

            return {
                status: true,
                data: list
            }
        }catch (error) {
            console.error('listUser user module Error: ', error)

            return {
                status: false,
                error
            }
        }
    }
}

module.exports = new _user()