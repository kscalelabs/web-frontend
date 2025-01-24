import open3d as o3d
import shutil
from pathlib import Path


def decimate_mesh(input_path, output_path, target_faces=7500):
    try:
        mesh = o3d.io.read_triangle_mesh(str(input_path))
        if len(mesh.triangles) > target_faces:
            mesh = mesh.simplify_quadric_decimation(target_faces)
            o3d.io.write_triangle_mesh(str(output_path), mesh)
            print(f"Decimated {input_path.name}: {len(mesh.triangles)} faces")
            return True
    except Exception as e:
        print(f"Could not decimate {input_path.name}, copying original: {e}")
        return False
    return False


def process_folder(folder_path, output_folder):
    folder_path = Path(folder_path)
    output_folder = Path(output_folder)
    output_folder.mkdir(exist_ok=True)

    mesh_files = list(folder_path.glob("*.stl")) + list(folder_path.glob("*.obj"))

    for mesh_path in mesh_files:
        output_path = output_folder / mesh_path.name
        if not decimate_mesh(mesh_path, output_path):
            shutil.copy2(mesh_path, output_path)
            print(f"Copied original {mesh_path.name}")


if __name__ == "__main__":
    zbot_path = Path("zbot")
    mesh_folder = zbot_path / "meshes"
    output_folder = zbot_path / "meshes_decimated"

    process_folder(mesh_folder, output_folder)
