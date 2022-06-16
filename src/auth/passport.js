const passport = require("passport");
const passportJwt = require("passport-jwt");
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const User = require("../models/users");

passport.use(
  new StrategyJwt(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET,
    },
    async function (jwtPayload, done) {
      try {
        const Users = await User.findOne({ where: { id_pegawai: jwtPayload.id_pegawai } });
        return done(null, Users);
      } catch (err) {
        return done(err);
      }
    }
  )
);
