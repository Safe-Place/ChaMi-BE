
# Chami-Be

A brief description of what this project does and who it's for


## Tech Stack

**Client:** Android

**Server:** Node, Express, Firestore, Mysql, json web token

## Installation

clone this repo and run the following command
 
``` bash
  cd chami-be
  npm install  
```
## 
## Running Tests

To run test, run the following command

```bash
  npm start
```


## API Reference

#### Register Users

```http
 POST /api/v1/register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id_pegawai` | `string` | **input id pegawai**. |
| `name` | `string` | **input nama**. |
| `password` | `string` | **input password**. |
| `password2` | `string` | **input password2**. |
| `email` | `string` | **input email**. |
| `posisi` | `string` | **input posisi**. |
| `divisi` | `string` | **input divisi**. |

- Response Jika Berhasil
```
{
    "message": "berhasil",
    "status": true,
    "data": {
        "id_pegawai": "blabla",
        "name": "test",
        "password": "1234567",
        "password2": "1234567",
        "email": "blabla@mail.co.id",
        "posisi": "Agent",
        "divisi": "Digital Center"
    }
}
```

#### Login Users

```http
  GET /api/v1/login
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id_pegawai` | `string` | **input id pegawai**. |
| `password` | `string` | **input password**. |

- Response Jika Gagal Login
```
{
    "message": "Id Pagawai atau Password Salah!"
}
```
- Response Jika Berhasil Login
```
{
    "message": "selamat Datang",
    "status": true,
    "token": "secret-auth-token",
    "data": {}
}
```

#### Update Users

```http
  POST /api/v1/profile
```
- Request header
  - token
  - id

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id_pegawai` | `string` | **input id pegawai**. |
| `name` | `string` | **input name**. |


