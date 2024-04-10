import { pool } from "../db.js";


export const getTabla = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM formulario ORDER BY createAt ASC"
    );
    res.render('../views/tabla', {
        productos: result
      });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getFormularios = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM formulario ORDER BY createAt ASC"
    );
    res.render('../views/productos', {
        productos: result
      });

  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getFormulario = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM formulario WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0)
      return res.status(404).json({ message: "formulario not found" });
      res.render('../views/productos_edit', {
        productos: result[0]
      });
    //res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createFormulario = async (req, res) => {
  try {
    console.log(req.body);
    console.log(req.file);
    const { nombre ,imagen, descripcion, inventario } = req.body;
    const {filename,originalname, mimetype, size } = req.file;
    const ruta =  '/img/uploads/' + req.file.filename;
    const [result] = await pool.query(
      "INSERT INTO formulario(nombre,imagen, descripcion, inventario, filename,originalname, mimetype, size, path) VALUES (?, ? ,?, ?, ?, ?, ? , ?, ?)",
      [nombre,imagen, descripcion, inventario, filename,originalname, mimetype, size, ruta]
    );
    res.redirect('/tabla');   
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateFormulario = async (req, res) => {
  try {
    const result = await pool.query("UPDATE formulario SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.redirect('/tabla');
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteFormulario= async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM formulario WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0)
      return res.status(404).json({ message: "formulario not found" });
    else {
      res.redirect('/tabla');   


    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};









