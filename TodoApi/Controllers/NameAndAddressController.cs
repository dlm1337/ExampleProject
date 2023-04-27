using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TodoApi.Data;
using TodoApi.Models;

namespace TodoApi.Controllers
{
    [Route("api/NameAndAddress")]
    [ApiController]
    public class NameAndAddressController : ControllerBase
    {
        private readonly NameAndAddressContext _context;

        public NameAndAddressController(NameAndAddressContext context)
        {
            _context = context;
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<NameAndAddressDTO>> GetNameAndAddress(long id)
        {
            var NameAndAddress = await _context.NameAndAddresses.FindAsync(id);

            if (NameAndAddress == null)
            {
                return NotFound();
            }

            return ItemToDTO(NameAndAddress);
        }

        [HttpPost]
        public async Task<ActionResult<NameAndAddressDTO>> CreateNameAndAddress(NameAndAddressDTO NameAndAddressDTO)
        {
            var NameAndAddress = new NameAndAddress
            {
                IsComplete = NameAndAddressDTO.IsComplete,
                Company = NameAndAddressDTO.Company,
                FirstName = NameAndAddressDTO.FirstName,
                LastName = NameAndAddressDTO.LastName,
                Address = NameAndAddressDTO.Address,
                Address2 = NameAndAddressDTO.Address2,
                City = NameAndAddressDTO.City,
                State = NameAndAddressDTO.State,
                PostalCode = NameAndAddressDTO.PostalCode
            };

            _context.NameAndAddresses.Add(NameAndAddress);
            await _context.SaveChangesAsync();

            return CreatedAtAction(
                nameof(GetNameAndAddress),
                new { id = NameAndAddress.Id },
                ItemToDTO(NameAndAddress));
        }

        private static NameAndAddressDTO ItemToDTO(NameAndAddress NameAndAddress) =>
       new NameAndAddressDTO
       {
           IsComplete = NameAndAddress.IsComplete,
           Company = NameAndAddress.Company,
           FirstName = NameAndAddress.FirstName,
           LastName = NameAndAddress.LastName,
           Address = NameAndAddress.Address,
           Address2 = NameAndAddress.Address2,
           City = NameAndAddress.City,
           State = NameAndAddress.State,
           PostalCode = NameAndAddress.PostalCode
       };

    }
}