using Microsoft.EntityFrameworkCore;
using DeliveryTestApi.Models;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<DeliveryContext>(opt => opt.UseInMemoryDatabase("TodoDelivery"));

//se crea la variable del cors 
var deliveryPolice = "_deliveryPolice";

//builder.Services.AddSwaggerGen(c =>
//{
//    c.SwaggerDoc("v1", new() { Title = "TodoApi", Version = "v1" });
//});

builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new()
    {
        Title = "Mi api de Deliverys",
        Description = "Esta Api se basa en un recurso para obtener los datos de ordenes de envio",
        Version = "v1"
    });

    /*Options.IncludeXmlComments("");*/
});

//habilitar los cors para el consumo de ApiRest
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: deliveryPolice,
        policy =>
        {
            // policy.WithOrigins("*");
            policy.AllowAnyHeader()
                     .AllowAnyMethod()
                     .AllowAnyOrigin();

        });
});

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

if (builder.Environment.IsDevelopment())
{
    app.UseDeveloperExceptionPage();
    //app.UseSwagger();
    //app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "TodoDelivery v1"));
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

//para ejecutar la funcion que habilita el cors
app.UseCors(deliveryPolice);

app.MapControllers();

app.Run(); 