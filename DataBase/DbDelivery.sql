USE [DbDelivery]
GO
/****** Object:  Table [dbo].[Cliente]    Script Date: 09/08/2022 08:47:37 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Cliente](
	[ClienteId] [int] NOT NULL,
	[Nombre] [varchar](255) NOT NULL,
	[Email] [varchar](255) NULL,
	[FechaIngreso] [datetime] NULL,
	[Contrasena] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[ClienteId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Empleado]    Script Date: 09/08/2022 08:47:37 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Empleado](
	[IdEmpleado] [int] NOT NULL,
	[NombreEmpleado] [varchar](255) NULL,
	[FechaNacimiento] [datetime] NULL,
	[FechaIngreso] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdEmpleado] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Producto]    Script Date: 09/08/2022 08:47:37 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Producto](
	[IdProducto] [int] NOT NULL,
	[NombreProducto] [varchar](255) NULL,
	[IdRestaurante] [int] NULL,
	[Precio] [int] NULL,
	[Imagen] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[IdProducto] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Restaurante]    Script Date: 09/08/2022 08:47:37 p. m. ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Restaurante](
	[IdRestaurante] [int] NOT NULL,
	[NombreRestaurante] [varchar](255) NULL,
	[DireccionRestaurante] [varchar](255) NULL,
	[EmailRestaurante] [varchar](255) NULL,
PRIMARY KEY CLUSTERED 
(
	[IdRestaurante] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Empleado] ADD  DEFAULT (NULL) FOR [NombreEmpleado]
GO
ALTER TABLE [dbo].[Producto] ADD  DEFAULT (NULL) FOR [NombreProducto]
GO
ALTER TABLE [dbo].[Producto] ADD  DEFAULT (NULL) FOR [IdRestaurante]
GO
ALTER TABLE [dbo].[Producto] ADD  DEFAULT (NULL) FOR [Precio]
GO
ALTER TABLE [dbo].[Restaurante] ADD  DEFAULT (NULL) FOR [NombreRestaurante]
GO
ALTER TABLE [dbo].[Restaurante] ADD  DEFAULT (NULL) FOR [DireccionRestaurante]
GO
ALTER TABLE [dbo].[Restaurante] ADD  DEFAULT (NULL) FOR [EmailRestaurante]
GO
