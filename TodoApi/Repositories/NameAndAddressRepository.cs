using Microsoft.EntityFrameworkCore;
using TodoApi.Data;
using TodoApi.Models;

namespace TodoApi.Repo
{
    public interface INameAndAddressRepository
    {
        Task<NameAndAddress> GetNameAndAddress(long id);
        Task<NameAndAddress> CreateNameAndAddress(NameAndAddress NameAndAddress);
        Task<long> GetLastId();
    }

    public class NameAndAddressRepository : INameAndAddressRepository
    {
        private readonly NameAndAddressContext _context;

        public NameAndAddressRepository(NameAndAddressContext context)
        {
            _context = context;
        }

        public async Task<NameAndAddress> GetNameAndAddress(long id)
        {
            var nameAndAddress = await _context.NameAndAddresses.FindAsync(id);

            if (nameAndAddress == null)
            {
                throw new Exception($"NameAndAddress with id {id} not found.");
            }

            return nameAndAddress;
        }

        public async Task<NameAndAddress> CreateNameAndAddress(NameAndAddress NameAndAddress)
        {
            _context.NameAndAddresses.Add(NameAndAddress);
            await _context.SaveChangesAsync();

            return NameAndAddress;
        }
        public async Task<long> GetLastId()
        {
            return await _context.NameAndAddresses.MaxAsync(x => (long?)x.Id) ?? 0;
        }
    }
}
