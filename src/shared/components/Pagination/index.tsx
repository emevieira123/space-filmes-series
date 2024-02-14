import { Button, HStack, IconButton } from "@chakra-ui/react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}

const MaxItems = 7;
const MaxLeft = (MaxItems - 1) / 2;

export function Pagination({ currentPage, totalItems, itemsPerPage, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const firstPage = Math.max(currentPage - MaxLeft, 1);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  return (
    <HStack spacing={2} justifyContent="center" mt={4} mb={4}>
      <IconButton
        icon={<MdKeyboardArrowLeft />}
        aria-label="previous button"
        isDisabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      />
      {Array.from({ length: Math.min(MaxItems, totalPages) }, (_, index) => index + firstPage).map(page => (
        <Button
          key={page}
          onClick={() => handlePageChange(page)}
          colorScheme={currentPage === page ? 'green' : 'gray'}
          variant={currentPage === page ? 'solid' : 'outline'}
        >
          {page}
        </Button>
      ))}
      <IconButton
        icon={<MdKeyboardArrowRight />}
        aria-label="next button"
        isDisabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      />
    </HStack>
  );
}
