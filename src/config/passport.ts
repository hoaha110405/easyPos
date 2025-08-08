import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local'
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    },
    async (email, password, done) => {
      try{
        console.log('🔍 Đang tìm user với email:', email)
        const user = await prisma.user.findUnique({
          where: email
        })

        if(!user) {
          console.log('❌ Không tìm thấy user');
          return done(null, false, { message: 'Email không tồn tại' });
        }
      }
      catch(err) {
        console.error('🚨 Lỗi trong LocalStrategy:', err);
        return done(err);
      }
      return done(null, false); // Placeholder implementation
    }
  )
)

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: Number(id) } });
    done(null, user);
  } catch (err) {
    done(err);
  }
});

export default passport;