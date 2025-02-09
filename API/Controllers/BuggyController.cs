using API.DTOs;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

public class BuggyController : BaseApiController
{
    [HttpGet("unathorized")]
    public IActionResult GetUnathorized(){
        return Unauthorized();
    }

    [HttpGet("badrequest")]
    public IActionResult GetBadRequest(){
        return BadRequest("Not a good request");
    }

    [HttpGet("notfound")]
    public IActionResult GetNotFound(){
        return NotFound();
    }

    [HttpGet("internalerror")]
    public IActionResult GetInternalError(){
        throw new Exception("This is a test exception");
    }

    [HttpPost("validationerror")]
    public IActionResult GetValidationError(CreateProductDto product){
        return Ok();
    }
}
