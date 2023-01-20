using MassTransit;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddMassTransit(x => x.UsingRabbitMq((context, cfg) =>
{
    cfg.Host(builder.Configuration["RabbitMq:Host"], Convert.ToUInt16(builder.Configuration["RabbitMq:Port"]), builder.Configuration["RabbitMq:VirtualHost"], h =>
    {

        h.Username(builder.Configuration["RabbitMq:User"]);
        h.Password(builder.Configuration["RabbitMq:Password"]);
    });

    cfg.ConfigureEndpoints(context);
}));

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
