const Profession = require("./../models/profession");

class professionController {
    async createProfession(req, res) {
        try{
            const {name} = req.body;
            const profession = await Profession({
                name
            })
            await profession.save();
            return res.json({message: "success"})
        }catch (e) {
            res.status(400).json({ message: "creation error" });
        }
    }

    async getProfession(req, res) {
        try{
            const professions = await Profession.find()
            return res.json(professions)
        }catch (e) {
            res.status(400).json({ message: "get error" });
        }
    }
    async deleteProfession(req, res) {
        try {
          const id = req.params.id;
          if (!id) {
            throw new Error("not found id");
          }
          await Profession.findByIdAndDelete(id);
          return res.json({ message: "delete success" });
        } catch (e) {
          res.status(400).json({ message: "delete error" });
        }
      }
}

module.exports = new professionController();