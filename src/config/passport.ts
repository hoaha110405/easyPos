import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local'
import { PrismaClient } from "@prisma/client/extension";
import type { Prisma } from "@prisma/client";

passport.use(
  new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    },
    (username, password, done) => {
      try{
        console.log('🔍 Đang tìm user với username:', username)

      }
      catch(err) {

      }
      // Implement your user lookup and password verification here
      // Example:
      // User.findOne({ email }, (err, user) => {
      //   if (err) return done(err);
      //   if (!user) return done(null, false, { message: 'Incorrect email.' });
      //   if (!user.verifyPassword(password)) return done(null, false, { message: 'Incorrect password.' });
      //   return done(null, user);
      // });
      return done(null, false); // Placeholder implementation
    }
  )
)