const Category = require('../../models/Category');

const addCategory = async (req, res) => {
  try {
    const newCategory = new Category(req.body);
    await newCategory.save();
    res.status(200).send({
      message: 'Category Added Successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const addAllCategory = async (req, res) => {
  try {
    await Category.insertMany(req.body);
    res.status(200).send({
      message: 'Category Added successfully!',
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getShowingCategory = async (req, res) => {
  try {
    const categories = await Category.find({ status: 'Show' }).sort({
      _id: -1,
    });
    res.send(categories);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const allCategories = await Category.find({}).sort({ _id: -1 });

    var modifyBrand = []
    for (let i = 0; i < allCategories.length; i++) {
        let children=[]
        
            for (let j = 0; j < allCategories[i].children.length; j++)
            {
                children[j]={
                    id:i,
                    name:allCategories[i].children[j],
                    slug: allCategories[i].children[j].replace(/[^a-zA-Z0-9 ]/g, "")
                .replace(/[^A-Z0-9]/gi, "-")
                .toLowerCase(),
                }
            }
         
        modifyBrand[i] = {
          id: allCategories[i]._id,
          name: allCategories[i].parent,
          slug: allCategories[i].parent.replace(/[^a-zA-Z0-9 ]/g, "")
                .replace(/[^A-Z0-9]/gi, "-")
                .toLowerCase(),
          image:allCategories[i].icon,
          icon:allCategories[i].icon,
          children:children
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

const getCategoryById = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    res.send(category);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateCategory = async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (category) {
      category.parent = req.body.parent;
      // category.slug = req.body.slug;
      category.type = req.body.type;
      category.icon = req.body.icon;
      category.children = req.body.children;
      await category.save();
      res.send({ message: 'Category Updated Successfully!' });
    }
  } catch (err) {
    res.status(404).send({ message: 'Category not found!' });
  }
};

const updateStatus = (req, res) => {
  const newStatus = req.body.status;

  Category.updateOne(
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
          message: `Category ${newStatus} Successfully!`,
        });
      }
    }
  );
};

const deleteCategory = (req, res) => {
  Category.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.status(200).send({
        message: 'Category Deleted Successfully!',
      });
    }
  });

  //This is for delete children category
  // Category.updateOne(
  //   { _id: req.params.id },
  //   {
  //     $pull: { children: req.body.title },
  //   },
  //   (err) => {
  //     if (err) {
  //       res.status(500).send({ message: err.message });
  //     } else {
  //       res.status(200).send({
  //         message: 'Category Deleted Successfully!',
  //       });
  //     }
  //   }
  // );
};

module.exports = {
  addCategory,
  addAllCategory,
  getAllCategory,
  getShowingCategory,
  getCategoryById,
  updateCategory,
  updateStatus,
  deleteCategory,
};
