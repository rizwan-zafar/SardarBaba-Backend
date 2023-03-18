const Brand = require('../../models/Brand');

const addBrand = async (req, res) => {
  try {
    const newBrand = new Brand(req.body);
    await newBrand.save();
    res.status(200).send({
      message: 'Brand Added Successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const addAllBrand = async (req, res) => {
  try {
    await Brand.insertMany(req.body);
    res.status(200).send({
      message: 'Brand Added successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getShowingBrand = async (req, res) => {
  try {
    const categories = await Brand.find({ status: 'Show' }).sort({
      _id: -1,
    });
    res.send(categories);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllBrand = async (req, res) => {
  try {
    const brands = await Brand.find({}).sort({ _id: -1 });
    var filterBrand = brands.filter((brand)=> {
      return brand.status==="Show" || brand.status==="show";
    });


    var modifyBrand = []
    for (let i = 0; i < filterBrand.length; i++) {
        modifyBrand[i] = {
          id: filterBrand[i]._id,
          image: filterBrand[i].imageUrl,
          name: filterBrand[i].brandName,
          slug: filterBrand[i].brandName.replace(/[^a-zA-Z0-9 ]/g, "")
          .replace(/[^A-Z0-9]/gi, "-")
          .toLowerCase(),
        }
    }
    categories = {
      data: modifyBrand
    }
    res.send(categories);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getBrandById = async (req, res) => {
  try {
    const Brands = await Brand.findById(req.params.id);
    res.send(Brands);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateBrand = async (req, res) => {
  try {
    const Brands = await Brand.findById(req.params.id);
    if (Brands) {
      Brands.brandName = req.body.brandName;
      // Brand.slug = req.body.slug;
      //Brand.type = req.body.type;
      //Brand.icon = req.body.icon;
      //Brand.children = req.body.children;
      await Brands.save();
      res.send({ message: 'Brand Updated Successfully!' });
    }
  } catch (err) {
    res.status(404).send({ message: 'Brand not found!' });
  }
};

const updateStatus = (req, res) => {
  const newStatus = req.body.status;

  Brand.updateOne(
    { _id: req.params.id },
    {
      $set: {
        status: newStatus,
      },
    },
    (err) => {
      if (err) {
        res.status(500).send({
          message: err.message,
        });
      } else {
        res.status(200).send({
          message: `Brand ${newStatus} Successfully!`,
        });
      }
    }
  );
};

const deleteBrand = (req, res) => {
  Brand.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.status(200).send({
        message: 'Brand Deleted Successfully!',
      });
    }
  });

  //This is for delete children Brand
  // Brand.updateOne(
  //   { _id: req.params.id },
  //   {
  //     $pull: { children: req.body.title },
  //   },
  //   (err) => {
  //     if (err) {
  //       res.status(500).send({ message: err.message });
  //     } else {
  //       res.status(200).send({
  //         message: 'Brand Deleted Successfully!',
  //       });
  //     }
  //   }
  // );
};

module.exports = {
  addBrand,
  addAllBrand,
  getAllBrand,
  getShowingBrand,
  getBrandById,
  updateBrand,
  updateStatus,
  deleteBrand,
};
