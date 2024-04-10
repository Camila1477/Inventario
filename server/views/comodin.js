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

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createFormulario = async (req, res) => {
  try {
    const { nombre ,imagen, descripcion, inventario } = req.body;
    
    const [result] = await pool.query(
      "INSERT INTO formulario(nombre,imagen, descripcion, inventario) VALUES (?,? ,? , ?)",
      [nombre,imagen, descripcion, inventario]
    );
    res.redirect('/tabla');   
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
