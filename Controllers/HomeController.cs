﻿using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using proyIS.Models;

namespace proyIS.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }

    public IActionResult Privacy()
    {
        return View();
    }
    public IActionResult Galeria()
    {
        return View();
    }
    public IActionResult Modelos()
    {
        return View();
    }
    public IActionResult Contacto()
    {
        return View();
    }
    public IActionResult VistaAdmin()
    {
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
