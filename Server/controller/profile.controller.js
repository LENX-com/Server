const Profile = require("../models/profile");

//create a profile for a team members by an admin
exports.createProfile = async (req, res) => {
  try {
    const { ...args } = req.body;
    args.userId = req.user._id;

    const newProfile = await Profile.create(args);
    return res
      .status(200)
      .json({ data: newProfile, msg: "Profile created sucesfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

exports.getProfile = async (req, res) => {
  const profile = await Profile.find({ userId: req.user._id });
  try {
    if (!profile.length) {
      return res.status(400).json({ error: "No Profile created Yet " });
    }
    return res.status(200).json({ data: profile, msg: "Success" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

exports.getProfileById = async (req, res) => {
  const profile = await Profile.findById(req.params.profileId);
  try {
    if (!profile) {
      return res.status(400).json({ error: "no profile with that Id found" });
    }
    return res.status(200).json({ data: profile, msg: "success" });
  } catch (error) {
    console.log(error);
    return res.status(200).json(error);
  }
};

exports.removeProfile = async (req, res) => {
  try {
    await Profile.findByIdAndDelete(req.params.profileId);
    return res.status(200).json({ msg: "Profile deleted succesfully" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};
